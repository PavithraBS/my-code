package com.estuate.visitor.controller;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.estuate.visitor.dto.Visitor;
import com.estuate.visitor.service.VisitorService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/menu")

public class VisitorController {

	@Autowired
	private VisitorService visitorservice;

	@PostMapping(value = "/saveVisitorDetails")
	public void save(@RequestBody Visitor vrObj) {
		visitorservice.save(vrObj);
	}
	
	@RequestMapping( value="/getVisitorDetails")
	public Map<String, Object> getVisitorList() {
 	return visitorservice.getVisitorList();
	}

	@PostMapping(value = "/logoutVisitorDetails" )
	public void logout(@RequestBody Visitor vrObj) {
		visitorservice.logout(vrObj);
	}
	
	@GetMapping( value="/visitorHistoryDetails")
	public Map<String, Object> historyList(@RequestParam String startDate,@RequestParam String endDate) {
		
		System.out.println(startDate+"dfffffffffff"+endDate);
 	return visitorservice.historyList(startDate,endDate);
	}

}
