function showCoords(e){jQuery("#image_x").val(e.x),jQuery("#image_y").val(e.y),jQuery("#image_x2").val(e.x2),jQuery("#image_y2").val(e.y2),jQuery("#image_crop").val(1)}var loader=js_vars.loader;jQuery(document).ready(function(){var e=Backbone.Modal.extend({template:_.template(jQuery("#modal-template").html()),cancelEl:".bbm-button"});jQuery(document).on("click","#open-crop-and-resize",function(a){var i=new e;jQuery(".app").html(i.render().el),uie_load_editor(a)});var a;jQuery(document).on("click",".media-modal-close",function(){jQuery(".media-modal-content").html(a)}),jQuery(document).on("click",".uie-change-image-size",function(e){uie_load_intermediate(e)}),jQuery(document).on("click",".uie-crop-from-original",function(e){uie_load_crop_from_original(e)}),jQuery(document).on("click","#uie-crop-original-image",function(e){uie_crop_original_image(e)}),jQuery(document).on("click","#uie-crop-button",function(e){uie_crop_and_save(e)}),jQuery(document).on("click","#uie-scale-original-image",function(e){uie_scale_original_image(e)}),jQuery(document).on("click","#uie-restore-original-image",function(e){uie_restore_original_image(e)}),jQuery(document).on("click","#uie-reset-scale-image",function(e){uie_reset_scale_original_image(e)}),jQuery(document).on("blur","#imgedit-scale-width",function(e){var a=jQuery("#wp-image-target-width").val(),i=jQuery("#wp-image-target-height").val(),r=[a,i],t=uie_get_aspect_ratio(r),o=jQuery(e.target).val();jQuery("#imgedit-scale-height").val(parseInt(o/t))}),jQuery(document).on("blur","#imgedit-scale-height",function(e){var a=jQuery("#wp-image-target-width").val(),i=jQuery("#wp-image-target-height").val(),r=[a,i],t=uie_get_aspect_ratio(r),o=jQuery(e.target).val();jQuery("#imgedit-scale-width").val(parseInt(t*o))})}),uie_scale_original_image=function(e){var a=jQuery("#uie-form"),i=a.serialize();data={action:"uie-scale-original-image",data:i,wp_show_image_name:jQuery(e.target).data("image-name")},_uie_editor_ajax(e,data)},uie_crop_original_image=function(){var e=jQuery(".bbm-modal__section"),a=jQuery("#uie-form"),i=a.serialize();data={action:"uie-crop-original-image",data:i},e.html(loader);jQuery.ajax({type:"POST",url:ajaxurl,data:data,dataType:"json",cache:!1}).done(function(a){if(0==a.error){e.html(a.html);var i={bgColor:"#000",aspectRatio:uie_jcrop_ar(),allowMove:!0,onSelect:showCoords,onChange:showCoords,boxWidth:uie_jcrop_box_width()};jQuery("#jcrop_target").Jcrop(i,function(){jcrop_api=this})}})},uie_restore_original_image=function(e){var a=jQuery("#uie-form"),i=a.serialize();data={action:"uie-restore-original-image",data:i,wp_show_image_name:jQuery(e.target).data("image-name")},_uie_editor_ajax(e,data)},uie_reset_scale_original_image=function(){jQuery("#imgedit-scale-width").val(jQuery("#wp-image-width").val()),jQuery("#imgedit-scale-height").val(jQuery("#wp-image-height").val())},uie_load_editor=function(e){e.preventDefault();var a=jQuery("#open-crop-and-resize").data("post-id");data={action:"uie-get-editor",wp_image_id:a,wp_image_target_size:"medium"},_uie_editor_ajax(e,data)},uie_load_intermediate=function(e){var a=(jQuery(".bbm-modal__section"),jQuery(e.target).data("image-name"));jQuery("#wp-image-target-size").val(a),jQuery("#crop_from_original").val(0);var i=jQuery("#uie-form"),r=i.serialize();data={action:"uie-get-editor",data:r,wp_show_image_name:a},_uie_editor_ajax(e,data)},uie_load_crop_from_original=function(e){jQuery(".bbm-modal__section");jQuery("#wp-image-target-size").val(jQuery(e.target).data("image-name")),jQuery("#crop_from_original").val(1);var a=jQuery("#uie-form"),i=a.serialize();data={action:"uie-get-editor",data:i,wp_show_image_name:jQuery(e.target).data("image-name")},_uie_editor_ajax(e,data)},_uie_editor_ajax=function(e,a){var i=jQuery(".bbm-modal__section"),r=jQuery(e.target).hasClass("uie-crop-from-original");i.html(loader);jQuery.ajax({type:"POST",url:ajaxurl,data:a,dataType:"json",cache:!1}).done(function(e){if(0==e.error){i.html(e.html);var a={bgColor:"#000",aspectRatio:uie_jcrop_ar(),allowMove:!0,onSelect:showCoords,onChange:showCoords,boxWidth:uie_jcrop_box_width()};jQuery("#jcrop_target").Jcrop(a,function(){jcrop_api=this,orig_image_id=e.img_id,1==r&&jQuery("#crop_from_original").val(1)})}})},uie_crop_and_save=function(){var e=jQuery(".bbm-modal__section"),a=jQuery("#uie-form"),i=a.serialize();data={action:"uie-crop-and-save",data:i},e.html(loader);jQuery.ajax({type:"POST",url:ajaxurl,data:data,dataType:"json",cache:!1}).done(function(a){if(0==a.error){e.html(a.html);var i={bgColor:"#000",aspectRatio:uie_jcrop_ar(),allowMove:!0,onSelect:showCoords,onChange:showCoords,boxWidth:uie_jcrop_box_width()};jQuery("#jcrop_target").Jcrop(i,function(){jcrop_api=this})}})},uie_get_aspect_ratio=function(e){return e[0]/e[1]},uie_jcrop_ar=function(){var e=jQuery("#wp-image-target-width").val(),a=jQuery("#wp-image-target-height").val(),i=uie_get_aspect_ratio([e,a]);return"original"==jQuery("#wp-image-size").val()&&(i=0),i},uie_jcrop_box_width=function(){var e=jQuery("#uie-left-wrapper").width(),a=(jQuery("#uie-left-wrapper").height(),jQuery("#wp-image-width").val()),i=jQuery("#wp-image-height").val(),r=uie_get_aspect_ratio([i,a]),t=0;return t=parseInt(1>r?.75*e:e/2)};