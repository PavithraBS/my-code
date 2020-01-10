package com.estuate.visitor.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.estuate.visitor.dto.Visitor;

@Repository
public class VisitorDaoImp implements VisitorDao {

	@Autowired
	private EntityManager entityManager;

	@Override
	public void save(Visitor vrObj) {
		Date Date = vrObj.getDate();
		System.out.print(Date);
		Session currentSession = entityManager.unwrap(Session.class);
		currentSession.save(vrObj);
	}

	@Override
	public Map<String, Object> getVisitorList() {
		
		Session currentSession = entityManager.unwrap(Session.class);
		Query query = currentSession.createQuery("from Visitor  where logoutDate is null");
		List<Visitor> visitor = query.list();

		for (int i = 0; i < visitor.size(); i++) {
			if (visitor.get(i).getDate() != null) {
				visitor.get(i).setloginDate(visitor.get(i).getDate().toString().substring(0, 10));
				visitor.get(i).setloginTime(visitor.get(i).getDate().toString().substring(10, 16));
			}
		}

		Map<String, Object> map = new HashMap<>();
		map.put("data", visitor);
		return map;

	}

	@Override
	public void logout(Visitor vrObj) {
		int id = vrObj.getId();
		System.out.print(id);
		Date logout = vrObj.getLogoutDate();
		System.out.print(logout);
		Session currentSession = entityManager.unwrap(Session.class);

		Visitor vistitorTemp = (Visitor) currentSession.createQuery("from Visitor where id=" + id).list().get(0);
		vistitorTemp.setLogoutDate(logout);
		currentSession.update(vistitorTemp);
	}

	@Override
	public Map<String, Object> historyList(String startDate,String endDate) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Query query=null;
		List<Visitor> visitor =new ArrayList<>();
		if(startDate.trim().length()==0 && endDate.trim().length()==0) {
			 query = currentSession.createQuery("from Visitor where  logoutDate is not null");
			 visitor = query.list();
				for (int i = 0; i < visitor.size(); i++) {
					if (visitor.get(i).getDate() != null) {
						visitor.get(i).setloginDate(visitor.get(i).getDate().toString().substring(0, 10));
						visitor.get(i).setloginTime(visitor.get(i).getDate().toString().substring(10, 16));
					}
				}
				
				for (int i = 0; i < visitor.size(); i++) {
					if (visitor.get(i).getLogoutDate() != null) {
						visitor.get(i).setLogoutDatehalf(visitor.get(i).getLogoutDate().toString().substring(0, 10));
						visitor.get(i).setLogoutTime(visitor.get(i).getLogoutDate().toString().substring(10, 16));
					}
				}
		}else {
		String startDateTemp=startDate.toString().substring(0,10);
		String endDate1=endDate.toString().substring(0, 10);
	
		 query = currentSession.createQuery("from Visitor where date between "+"date('"+startDateTemp+"')"+" and "+"date('"+endDate1+"') and logoutDate is not null");
		 visitor = query.list();
			System.out.println("sdgfds"+ visitor);
			for (int i = 0; i < visitor.size(); i++) {
				if (visitor.get(i).getDate() != null) {
					visitor.get(i).setloginDate(visitor.get(i).getDate().toString().substring(0, 10));
					visitor.get(i).setloginTime(visitor.get(i).getDate().toString().substring(10, 16));
				}
			}
			
			for (int i = 0; i < visitor.size(); i++) {
				if (visitor.get(i).getLogoutDate() != null) {
					visitor.get(i).setLogoutDatehalf(visitor.get(i).getLogoutDate().toString().substring(0, 10));
					visitor.get(i).setLogoutTime(visitor.get(i).getLogoutDate().toString().substring(10, 16));
				}
			}

		}
	

		Map<String, Object> map = new HashMap<>();
		map.put("data", visitor);
		
		return map;
		
	}


}
