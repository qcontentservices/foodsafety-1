window.globalProvideData('slide', '{"title":"Course Completion","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"tween","slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":1,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"6GTsPbI7o3Q","lmsId":"Slide1","width":1024,"height":576,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0x595959","alpha":100,"stop":0}]}},"id":"6IrtYfqLR1r","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[]},"ActGrpOnPrevButtonClick":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6WES0Igm6ut.6QIuWK0f57M"}}]},"ReviewInt_6ng7VZ2jGjo":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6a59t3QOFn2"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6ng7VZ2jGjo","typea":"var","valueb":"6Mo3960E9CP","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00001000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6Mo3960E9CP.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6ng7VZ2jGjo"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6Mo3960E9CP.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6ng7VZ2jGjo"}]}]}]},"ReviewIntCorrectIncorrect_6ng7VZ2jGjo":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6a59t3QOFn2"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6ng7VZ2jGjo":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6ng7VZ2jGjo"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001000101"}]}]},"DisableChoices_6ng7VZ2jGjo":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"6a59t3QOFn2.ActGrpSetDisabledState"}]},"6ng7VZ2jGjo_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5cGRrCUF7cH.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6ng7VZ2jGjo"}]}]},"SetLayout_pxabnsnfns00001000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001000101"}]}]},"NavigationRestrictionNextSlide_6IrtYfqLR1r":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6X3PyVmrnMw"}}]},"NavigationRestrictionPreviousSlide_6IrtYfqLR1r":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnPrevButtonClick"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pnxanbnsnfns00001000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pnxanbnsnfns00001000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6IrtYfqLR1r"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_66B76DSuY6T","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_66B76DSuY6T","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6ng7VZ2jGjo","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6ng7VZ2jGjo"}],"elseActions":[{"kind":"exe_actiongroup","id":"6ng7VZ2jGjo_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6ng7VZ2jGjo","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6ng7VZ2jGjo","typea":"var","valueb":"6Mo3960E9CP","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6Mo3960E9CP"},"completed_slide_ref":{"type":"string","value":"_player.5oZib5PZ5PQ.6X3PyVmrnMw"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6ng7VZ2jGjo","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6ng7VZ2jGjo","typea":"var","valueb":"6Mo3960E9CP","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6Mo3960E9CP"},"completed_slide_ref":{"type":"string","value":"_player.5oZib5PZ5PQ.6X3PyVmrnMw"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6IrtYfqLR1r"}]}]}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":25500,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5kPnysFjWzs"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6IvJtNwjT5u"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6UTmZVdWney"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6aDZhIbSsAw"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YzLRqbWYDd"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6nOiPJbJqD3"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6nOiPJbJqD3.6oIcVQhzYwU"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6nOiPJbJqD3.5gsnEi2Uk6b"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6nOiPJbJqD3.6hBU3pY7vgG"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LdPTL7bFNc"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Jtb56dFoi4"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6GGt53tz3TY"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6CGFMOw94IO"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6a59t3QOFn2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5bGbGTL4rfz"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5teoF1uePLk"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":42,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":267,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1024,"bottom":534,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":10}},"html5data":{"xPos":0,"yPos":0,"width":1024,"height":534,"strokewidth":0}},"width":1024,"height":534,"resume":true,"useHandCursor":true,"id":"5teoF1uePLk"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":63,"yPos":102,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":448.5,"rotateYPos":203.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":900,"bottom":410,"altText":"Rectangle 5","pngfb":false,"pr":{"l":"Lib","i":393}},"html5data":{"xPos":0,"yPos":0,"width":898,"height":408,"strokewidth":3}},"width":898,"height":408,"resume":true,"useHandCursor":true,"id":"5kPnysFjWzs"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6IvJtNwjT5u_-204275007","id":"01","linkId":"txt__default_6IvJtNwjT5u","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":688,"height":24,"shadowIndex":-1,"scrollOverflow":false,"vartext":"<p style=\\"text-align:center;direction: ltr; padding-left: 0px;margin-top: 5px\\"><span style=\\"font-family: \'Arial Charset0_v8wz5YMo9EE9FF07\',\'Arial\'; font-size:21.3333px; color:#000000;line-height:24.53125px;\\"><b style=\\"font-family: \'ArialBold Charset0_Bold3D70FAD3\',\'Arial\';\\">You have finished the last part and reached the end.</b></span></p>","vectortext":{"left":0,"top":0,"right":606,"bottom":24,"pngfb":false,"pr":{"l":"Lib","i":395}}}],"shapemaskId":"","xPos":168,"yPos":144,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":344.5,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":689,"bottom":24,"altText":"You have finished the last part and reached the end.","pngfb":false,"pr":{"l":"Lib","i":394}},"html5data":{"xPos":0,"yPos":0,"width":689,"height":24,"strokewidth":0}},"width":689,"height":24,"resume":true,"useHandCursor":true,"id":"6IvJtNwjT5u"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6UTmZVdWney_957305402","id":"01","linkId":"txt__default_6UTmZVdWney","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":903,"height":22,"shadowIndex":-1,"scrollOverflow":false,"vartext":"<p style=\\"text-align:center;direction: ltr; padding-left: 0px;margin-top: 5px\\"><span style=\\"font-family: \'Arial Charset0_v8wz5YMo9EE9FF07\',\'Arial\'; font-size:18.6667px; color:#ff0000;line-height:21.46484375px;\\"><b style=\\"font-family: \'ArialBold Charset0_Bold3D70FAD3\',\'Arial\';\\">You must click the button to mark that you have completed viewing this content.</b></span></p>","vectortext":{"left":0,"top":0,"right":819,"bottom":22,"pngfb":false,"pr":{"l":"Lib","i":397}}}],"shapemaskId":"","xPos":60,"yPos":184,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":452,"rotateYPos":11,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":904,"bottom":22,"altText":"You must click the button to mark that you have completed viewing this content.","pngfb":false,"pr":{"l":"Lib","i":396}},"html5data":{"xPos":0,"yPos":0,"width":904,"height":22,"strokewidth":0}},"width":904,"height":22,"resume":true,"useHandCursor":true,"id":"6UTmZVdWney"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":79,"id":"01","url":"story_content/6n0YrZqJ77T_80_DX376_DY376.swf","type":"normal","altText":"coursePage_blank.png","width":376,"height":251,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":246,"yPos":306,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":94,"rotateYPos":63,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":190,"bottom":128,"altText":"coursePage_blank.png","pngfb":false,"pr":{"l":"Lib","i":398}},"html5data":{"xPos":-1,"yPos":-1,"width":190,"height":128,"strokewidth":1}},"width":188,"height":126,"resume":true,"useHandCursor":true,"id":"6aDZhIbSsAw"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":279,"yPos":423,"tabIndex":17,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":3.5,"rotateYPos":3,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":9,"bottom":8,"altText":"Rectangle 3","pngfb":false,"pr":{"l":"Lib","i":399}},"html5data":{"xPos":0,"yPos":0,"width":8,"height":7,"strokewidth":1}},"width":8,"height":7,"resume":true,"useHandCursor":true,"id":"5YzLRqbWYDd"},{"kind":"objgroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":79,"id":"01","url":"story_content/6n0YrZqJ77T_80_DX376_DY376.swf","type":"normal","altText":"coursePage_blank.png","width":376,"height":251,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":94,"rotateYPos":63,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":190,"bottom":128,"altText":"coursePage_blank.png","pngfb":false,"pr":{"l":"Lib","i":398}},"html5data":{"xPos":-1,"yPos":-1,"width":190,"height":128,"strokewidth":1}},"width":188,"height":126,"resume":true,"useHandCursor":true,"id":"6oIcVQhzYwU"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":33,"yPos":117,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":3.5,"rotateYPos":3,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":9,"bottom":8,"altText":"Rectangle 4","pngfb":false,"pr":{"l":"Lib","i":399}},"html5data":{"xPos":0,"yPos":0,"width":8,"height":7,"strokewidth":1}},"width":8,"height":7,"resume":true,"useHandCursor":true,"id":"5gsnEi2Uk6b"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":80,"id":"01","url":"story_content/6r0kfgCm5qF_80_DX100_DY100.jpg","type":"normal","altText":"icon_complete.jpg","width":50,"height":50,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":69,"yPos":104,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":25,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-5,"top":-5,"right":53,"bottom":53,"altText":"icon_complete.jpg","pngfb":false,"pr":{"l":"Lib","i":400}},"html5data":{"xPos":-2,"yPos":-2,"width":52,"height":52,"strokewidth":3}},"width":50,"height":50,"resume":true,"useHandCursor":true,"id":"6hBU3pY7vgG"}],"accType":"text","altText":"Group\\r\\n 2","shapemaskId":"","xPos":590,"yPos":306,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":94,"rotateYPos":77,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":7,"scrolling":true,"shuffleLock":false,"width":188,"height":154,"resume":true,"useHandCursor":true,"id":"6nOiPJbJqD3"},{"kind":"vectorshape","rotation":270,"accType":"text","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":81,"id":"01","url":"","type":"normal","width":82,"height":164,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":512,"yPos":326,"tabIndex":13,"tabEnabled":true,"xOffset":-36,"yOffset":-38,"rotateXPos":0,"rotateYPos":40,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":82,"bottom":164,"altText":"Line 1","pngfb":false,"pr":{"l":"Lib","i":101}},"html5data":{"url":"txt__default_6LdPTL7bFNc.png","xPos":-36,"yPos":-38,"width":82,"height":164,"strokewidth":4,"mask":"C4DO7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X49O7X3BO1XBO7XBO2X2CO2XAO7XAO2X2EO3X8O7X9O3X2EO4X7O7X7O4X30O5X5O7X5O6X30O6X4O7X4O6X32O7X2O7X2O8X32O8X1O7X1O8X34O1CX34O1BX36O1AX36O19X38O18X38O17X3AO16X3AO15X3CO14X3CO13X3EO11X3FO11X40OFX41OFX42ODX43ODX44OBX45OBX46O9X47O9X48O7X49O7X4AO5X4BO5X4CO3X4DO3X4EO1X4FO1XE95O"}},"width":0,"height":80,"resume":true,"useHandCursor":true,"id":"6LdPTL7bFNc"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":278,"yPos":407,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":17.5,"rotateYPos":27.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":35,"bottom":55,"altText":"Freeform 1","pngfb":false,"pr":{"l":"Lib","i":401}},"html5data":{"xPos":0,"yPos":0,"width":35,"height":55,"strokewidth":0}},"width":35,"height":55,"resume":true,"useHandCursor":true,"id":"6Jtb56dFoi4"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":622,"yPos":407,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":17.5,"rotateYPos":27.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":35,"bottom":55,"altText":"Freeform 2","pngfb":false,"pr":{"l":"Lib","i":401}},"html5data":{"xPos":0,"yPos":0,"width":35,"height":55,"strokewidth":0}},"width":35,"height":55,"resume":true,"useHandCursor":true,"id":"6GGt53tz3TY"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":82,"id":"01","url":"story_content/5kqr3t5VQPE_80_DX100_DY100.jpg","type":"normal","altText":"icon_started.jpg","width":50,"height":50,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":315,"yPos":410,"tabIndex":16,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":25,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-5,"top":-5,"right":53,"bottom":53,"altText":"icon_started.jpg","pngfb":false,"pr":{"l":"Lib","i":400}},"html5data":{"xPos":-2,"yPos":-2,"width":52,"height":52,"strokewidth":3}},"width":50,"height":50,"resume":true,"useHandCursor":true,"id":"6CGFMOw94IO"},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5pJct1syMYH_1337505944","id":"01","linkId":"txt__default_6a59t3QOFn2","type":"vectortext","xPos":4,"yPos":3,"xAccOffset":4,"yAccOffset":3,"width":204,"height":35,"shadowIndex":-1,"scrollOverflow":false,"vartext":"<p style=\\"text-align:center;direction: ltr; padding-left: 0px\\"><span style=\\"font-family: \'Arial Charset0_v8wz5YMo9EE9FF07\',\'Arial\'; font-size:18.6667px; color:#000000;line-height:21.46484375px;\\"><b style=\\"font-family: \'ArialBold Charset0_Bold3D70FAD3\',\'Arial\';\\">Complete</b></span></p>","vectortext":{"left":0,"top":0,"right":150,"bottom":32,"pngfb":false,"pr":{"l":"Lib","i":411}}},{"kind":"textdata","uniqueId":"6YBN6DFn9kr_1071753048","id":"05","linkId":"txt_New State_6a59t3QOFn2","type":"vectortext","xPos":4,"yPos":3,"xAccOffset":4,"yAccOffset":3,"width":204,"height":35,"shadowIndex":-1,"scrollOverflow":false,"vartext":"<p style=\\"text-align:center;direction: ltr; padding-left: 0px\\"><span style=\\"font-family: \'Arial Charset0_v8wz5YMo9EE9FF07\',\'Arial\'; font-size:18.6667px; color:#474747;line-height:21.46484375px;\\"><b style=\\"font-family: \'ArialBold Charset0_Bold3D70FAD3\',\'Arial\';\\">Complete</b></span></p>","vectortext":{"left":0,"top":0,"right":150,"bottom":32,"pngfb":false,"pr":{"l":"Lib","i":412}}}],"shapemaskId":"","xPos":406,"yPos":232,"tabIndex":7,"tabEnabled":true,"radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":106,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":402}},"html5data":{"xPos":0,"yPos":0,"width":212,"height":40,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":403}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":403}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":403}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":404}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":405}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":405}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":403}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"New State","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":406}},"html5data":{"xPos":0,"yPos":0,"width":212,"height":40,"strokewidth":1}}},{"kind":"state","name":"New State_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":407}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"New State_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":407}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"New State_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":407}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"New State_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":408}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":1}}},{"kind":"state","name":"New State_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":409}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"New State_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":409}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"New State_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":407}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"New State (2)","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":410}},"html5data":{"xPos":0,"yPos":0,"width":212,"height":40,"strokewidth":1}}},{"kind":"state","name":"New State (2)_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":403}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"New State (2)_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":403}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"New State (2)_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":403}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"New State (2)_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":404}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":1}}},{"kind":"state","name":"New State (2)_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":405}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"New State (2)_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":405}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}},{"kind":"state","name":"New State (2)_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-2,"top":-2,"right":213,"bottom":41,"altText":"Complete","pngfb":false,"pr":{"l":"Lib","i":403}},"html5data":{"xPos":-2,"yPos":-2,"width":215,"height":43,"strokewidth":2}}}],"width":212,"height":40,"resume":true,"useHandCursor":true,"id":"6a59t3QOFn2","variables":[{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_this.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5cGRrCUF7cH"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_66B76DSuY6T.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5bGbGTL4rfz_-1541457703","id":"01","linkId":"txt__default_5bGbGTL4rfz","type":"vectortext","xPos":15,"yPos":0,"xAccOffset":15,"yAccOffset":0,"width":1008,"height":24,"shadowIndex":-1,"scrollOverflow":false,"vartext":"<p style=\\"text-align:left;direction: ltr; padding-left: 0px\\"><span style=\\"font-family: \'Arial Charset0_v8wz5YMo9EE9FF07\',\'Arial\'; font-size:21.3333px; color:#cccccc;line-height:24.53125px;\\">Course Completion</span></p>","vectortext":{"left":0,"top":0,"right":193,"bottom":24,"pngfb":false,"pr":{"l":"Lib","i":413}}}],"shapemaskId":"","xPos":0,"yPos":8,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1024,"bottom":24,"altText":"Course Completion","pngfb":false,"pr":{"l":"Lib","i":16}},"html5data":{"xPos":0,"yPos":0,"width":1024,"height":24,"strokewidth":0}},"width":1024,"height":24,"resume":true,"useHandCursor":true,"id":"5bGbGTL4rfz"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6ng7VZ2jGjo_CorrectReview","id":"01","linkId":"6ng7VZ2jGjo_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":551,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":415}}}],"shapemaskId":"","xPos":0,"yPos":536,"tabIndex":18,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":14,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1024,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":414}},"html5data":{"xPos":1,"yPos":1,"width":1021,"height":37,"strokewidth":2}},"width":1024,"height":40,"resume":false,"useHandCursor":true,"id":"6ng7VZ2jGjo_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6ng7VZ2jGjo_IncorrectReview","id":"01","linkId":"6ng7VZ2jGjo_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":558,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":417}}}],"shapemaskId":"","xPos":0,"yPos":536,"tabIndex":19,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":15,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1024,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":416}},"html5data":{"xPos":1,"yPos":1,"width":1021,"height":37,"strokewidth":2}},"width":1024,"height":40,"resume":false,"useHandCursor":true,"id":"6ng7VZ2jGjo_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","animations":[{"kind":"animation","id":"6GTsPbI7o3Q","duration":500,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":500,"alpha":{"path":[{"kind":"segment","start":"0","dstart":"0","end":"100","dend":"0"}],"duration":500,"easing":"linear","easingdir":"easein"}}]}],"useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');