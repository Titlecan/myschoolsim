"use strict";$(function(){nie.define(function(){var n=window.location.href;-1!=n.indexOf("/news/official/")?$(".newsListNav a").eq(1).addClass("on"):-1!=n.indexOf("/news/update/")?$(".newsListNav a").eq(2).addClass("on"):$(".newsListNav a").eq(0).addClass("on")})});