!function(a){Craft.ClearCachesUtility=Garnish.Base.extend({$trigger:null,$form:null,init:function(b){this.$form=a("#"+b),this.$trigger=a("input.submit",this.$form),this.$status=a(".utility-status",this.$form),this.addListener(this.$form,"submit","onSubmit")},onSubmit:function(b){b.preventDefault(),this.$trigger.hasClass("disabled")||(this.progressBar?this.progressBar.resetProgressBar():this.progressBar=new Craft.ProgressBar(this.$status),this.progressBar.$progressBar.removeClass("hidden"),this.progressBar.$progressBar.velocity("stop").velocity({opacity:1},{complete:a.proxy(function(){var a=Garnish.getPostData(this.$form),b=Craft.expandPostArray(a);this.postActionRequest({params:b})},this)}),this.$allDone&&this.$allDone.css("opacity",0),this.$trigger.addClass("disabled"),this.$trigger.blur())},updateProgressBar:function(){var a=100;this.progressBar.setProgressPercentage(a)},postActionRequest:function(b){var c={params:b};Craft.postActionRequest(b.action,c,a.proxy(function(b,c){b&&b.error&&alert(b.error),this.updateProgressBar(),setTimeout(a.proxy(this,"onComplete"),300)},this),{complete:a.noop})},onComplete:function(){this.$allDone||(this.$allDone=a('<div class="alldone" data-icon="done" />').appendTo(this.$status),this.$allDone.css("opacity",0)),this.progressBar.$progressBar.velocity({opacity:0},{duration:"fast",complete:a.proxy(function(){this.$allDone.velocity({opacity:1},{duration:"fast"}),this.$trigger.removeClass("disabled"),this.$trigger.focus()},this)})}})}(jQuery);
//# sourceMappingURL=ClearCachesUtility.js.map