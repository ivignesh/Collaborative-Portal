package com.backend2.configuration;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class WebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
@Override
protected String[] getServletMappings(){
	return new String[]{"/"};
}

@Override
protected Class<?>[]getRootConfigClasses(){
	//TODO Auto-generated method sub
	return new Class[]{WebAppConfig.class};
}

@Override
protected Class<?>[]getServletConfigClasses(){
	//TODO Auto-generated method sub
	return null;
}
}
