// ==========================================================================
// Project:   Hans - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Hans */

// This page describes the main user interface for your application.  
Hans.mainPage = SC.Page.design({
  mainPane: SC.MainPane.extend({
    childViews: ['contentView'],
    contentView: SC.TemplateView.design({
      layerId: 'my-root-id',
      templateName: 'main_page',
      mouseDown: function(evt) {
        console.log('bug?');
        evt.preventDefault();
        evt.stopPropagation();
        evt.stop();
        return NO;
      }
    })
  })
});
