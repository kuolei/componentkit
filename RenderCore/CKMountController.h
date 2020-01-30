/*
*  Copyright (c) 2014-present, Facebook, Inc.
*  All rights reserved.
*
*  This source code is licensed under the BSD-style license found in the
*  LICENSE file in the root directory of this source tree. An additional grant
*  of patent rights can be found in the PATENTS file in the same directory.
*
*/

#import <ComponentKit/CKAssert.h>
#import <ComponentKit/CKComponentDescriptionHelper.h>
#import <ComponentKit/CKMountable.h>
#import <ComponentKit/CKMountableHelpers.h>
#import <ComponentKit/CKMountedObjectForView.h>
#import <ComponentKit/CKViewConfiguration.h>
#import <ComponentKit/ComponentMountContext.h>
#import <ComponentKit/CKDefines.h>

#if CK_NOT_SWIFT


namespace CK {

struct MountController {
  template <typename AccessibilityContext>
  auto mount(id<CKMountable> mountable,
             const CKViewConfiguration<AccessibilityContext> &viewConfiguration,
             const CK::Component::MountContext &context,
             const CGSize size,
             std::shared_ptr<const std::vector<CKComponentLayoutChild>> children,
             id<CKMountable> supercomponent) -> Component::MountResult
  {
    CKCAssertMainThread();

    if (_mountInfo == nullptr) {
      _mountInfo.reset(new CKMountInfo());
    }
    _mountInfo->supercomponent = supercomponent;

    UIView *v = context.viewManager->viewForConfiguration(mountable.class, viewConfiguration);
    if (v) {
      auto const currentMountedComponent = (id<CKMountable>)CKMountedObjectForView(v);
      if (_mountInfo->view != v) {
        _relinquishMountedView(mountable); // First release our old view
        [currentMountedComponent unmount]; // Then unmount old component (if any) from the new view
        CKSetMountedObjectForView(v, mountable);
        CK::Component::AttributeApplicator::apply(v, viewConfiguration);
        _mountInfo->view = v;
      } else {
        CKCAssert(currentMountedComponent == mountable, @"");
      }

      CKSetViewPositionAndBounds(v, context, size, children, supercomponent, mountable.class);
      _mountInfo->viewContext = {v, {{0,0}, v.bounds.size}};
      return {.mountChildren = YES, .contextForChildren = context.childContextForSubview(v, NO)};
    } else {
      CKCAssertWithCategory(_mountInfo->view == nil, mountable.class,
                            @"%@ should not have a mounted %@ after previously being mounted without a view.\n%@",
                            mountable.class,
                            [_mountInfo->view class],
                            CKComponentBacktraceDescription(CKComponentGenerateBacktrace(mountable)));
      _mountInfo->viewContext = {context.viewManager->view, {context.position, size}};
      return {.mountChildren = YES, .contextForChildren = context};
    }
  }

  auto unmount(id<CKMountable> mountable) -> void
  {
    CKCAssertMainThread();
    if (_mountInfo != nullptr) {
      _relinquishMountedView(mountable);
      _mountInfo.reset();
    }
  }

  const auto &mountInfo() const { return _mountInfo; }
private:
  mutable std::unique_ptr<CKMountInfo> _mountInfo;

  auto _relinquishMountedView(id<CKMountable> mountable) -> void
  {
    CKCAssertMainThread();
    CKCAssert(_mountInfo != nullptr, @"_mountInfo should not be null");
    if (_mountInfo != nullptr) {
      UIView *view = _mountInfo->view;
      if (view) {
        CKCAssert(CKMountedObjectForView(view) == mountable, @"");
        CKSetMountedObjectForView(view, nil);
        _mountInfo->view = nil;
      }
    }
  }
};

};

#endif
