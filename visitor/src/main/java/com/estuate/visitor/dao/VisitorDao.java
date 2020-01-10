package com.estuate.visitor.dao;



import java.util.Map;

import com.estuate.visitor.dto.Visitor;

public interface VisitorDao {

	void save(Visitor vrObj);

	Map<String, Object> getVisitorList();

	void logout(Visitor vrObj);

	Map<String, Object> historyList(String startDate, String endDate);


}
