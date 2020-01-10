package com.estuate.visitor.dto;

import java.beans.Transient;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "register")
public class Visitor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name = "fullName")
	private String fullName;

	

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	@Column(name = "phone_number")
	private long phoneNumber;

	@Column(name = "badge_number")
	private long badgeNumber;

	@Column(name = "address")
	private String address;

	@Column(name = "person_tomeet")
	private String personToMeet;

	@Column(name = "reason_tomeet")
	private String reasonToMeet;

	@Column(name = "laptop")
	private String laptop;
	
	@Column(name = "laptop_number")
	private long laptopNumber;

	@Column(name = "others")
	private String others;
	
	public String getOthers() {
		return others;
	}

	public void setOthers(String others) {
		this.others = others;
	}

	public long getLaptopNumber() {
		return laptopNumber;
	}

	public void setLaptopNumber(long laptopNumber) {
		this.laptopNumber = laptopNumber;
	}

	@Column(name = "date")
	private Date date;

	@Column(name = "logoutDate")
	private Date logoutDate;

	@javax.persistence.Transient
	String loginTime;

	@javax.persistence.Transient
	String loginDate;
	
	@javax.persistence.Transient
	String logoutTime;

	@javax.persistence.Transient
	String logoutDatehalf;
	

	public String getLogoutTime() {
		return logoutTime;
	}

	public void setLogoutTime(String logoutTime) {
		this.logoutTime = logoutTime;
	}

	public String getLogoutDatehalf() {
		return logoutDatehalf;
	}

	public void setLogoutDatehalf(String logoutDatehalf) {
		this.logoutDatehalf = logoutDatehalf;
	}

	public String getloginDate() {
		return loginDate;
	}

	public void setloginDate(String loginDate) {
		this.loginDate = loginDate;
	}

	public Date getLogoutDate() {
		return logoutDate;
	}

	public void setLogoutDate(Date logoutDate) {
		this.logoutDate = logoutDate;
	}

	public String getloginTime() {
		return loginTime;
	}

	public void setloginTime(String loginTime) {
		this.loginTime = loginTime;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public long getBadgeNumber() {
		return badgeNumber;
	}

	public void setBadgeNumber(long badgeNumber) {
		this.badgeNumber = badgeNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPersonToMeet() {
		return personToMeet;
	}

	public void setPersonToMeet(String personToMeet) {
		this.personToMeet = personToMeet;
	}

	public String getReasonToMeet() {
		return reasonToMeet;
	}

	public void setReasonToMeet(String reasonToMeet) {
		this.reasonToMeet = reasonToMeet;
	}

	public String getLaptop() {
		return laptop;
	}

	public void setLaptop(String laptop) {
		this.laptop = laptop;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

}
