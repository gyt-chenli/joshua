package org.gyt.web.controller;

import org.gyt.web.api.service.FellowshipService;
import org.gyt.web.api.utils.ModelAndViewUtils;
import org.gyt.web.model.Fellowship;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * 团契页面路由器
 * Created by y27chen on 2016/7/12.
 */
@RestController
@RequestMapping("/fellowship")
public class FellowshipPageController {

    @Autowired
    private FellowshipService fellowshipService;

    @Autowired
    private ModelAndViewUtils modelAndViewUtils;

    @RequestMapping("/{name}")
    public ModelAndView getFellowshipHomePage(@PathVariable String name) {
        ModelAndView modelAndView = modelAndViewUtils.newModelAndView("staticPage/fellowship/" + name);

        filterSpecialPage(modelAndView, name);

        Fellowship fellowship = fellowshipService.get(name);
        modelAndView.addObject("title", String.format("基督教光音堂 - %s", fellowship.getDisplayName()));
        modelAndView.addObject("items", fellowship.getArticles());

        return modelAndView;
    }

    private void filterSpecialPage(ModelAndView modelAndView, String name) {
        if (name.equalsIgnoreCase("worship")) {
            modelAndView.setViewName("staticPage/worshipPage");
        } else if (name.equalsIgnoreCase("testimony")) {
            modelAndView.setViewName("staticPage/testimonyPage");
        } else if (name.equalsIgnoreCase("report")) {
            modelAndView.setViewName("staticPage/reportPage");
        } else if (name.equalsIgnoreCase("public")) {
            modelAndView.setViewName("staticPage/publicPage");
        } else if (name.equalsIgnoreCase("suffrage")) {
            modelAndView.setViewName("staticPage/suffragePage");
        } else if (name.equalsIgnoreCase("recommend")) {
            modelAndView.setViewName("staticPage/recommendPage");
        } else if (name.equalsIgnoreCase("sunday")) {
            modelAndView.setViewName("staticPage/sundaySchoolPage");
        }
    }
}
