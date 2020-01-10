package com.estuate.visitor.service;


import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estuate.visitor.dao.VisitorDao;
import com.estuate.visitor.dto.Visitor;

@Service
public class VisitorServiceImp implements VisitorService {

	@Autowired
	private VisitorDao visitordao;

	@Override
	@Transactional
	public void save(Visitor vrObj) {
		visitordao.save(vrObj);
	}

	@Override
	@Transactional
	public Map<String, Object> getVisitorList() {
		return visitordao.getVisitorList();

	}

	@Override
	@Transactional
	public void logout(Visitor vrObj) {
		visitordao.logout(vrObj);
	}

	@Override
	@Transactional
	public Map<String, Object> historyList(String startDate,String endDate) {
		return  visitordao.historyList(startDate,endDate);
	}

}
