package kr.co.buskers.main.agency.service;

import java.util.List;

import kr.co.buskers.repository.domain.AgencyGenre;
import kr.co.buskers.repository.domain.AgencyInfo;
import kr.co.buskers.repository.domain.AgencyPage;
import kr.co.buskers.repository.domain.Genre;

public interface AgencyService {
	List<AgencyInfo> agencyInfoList(AgencyPage page);
	AgencyInfo selectAgencyInfoByNo(int agencyInfoNo);
	List<Genre> selectGenre();
	int agencyInfoCount();
	int checkAgencyCode(String agencyCode);
	AgencyInfo selectAgencyByNo(int memberNo);
	
	
	void insertAgencyInfo(AgencyInfo agencyInfo);
	void insertAgencyGenre(AgencyGenre agencyGenre);
	void insertMemberAgency(AgencyInfo agencyInfo);
	
	void deleteAgencyInfoAll(int agencyInfoNo);
	void deleteAgency(AgencyInfo agencyInfo);
	
	void updateAgencyInfo(AgencyInfo agencyInfo,AgencyGenre agencyGenre);
	void updateAgencyPermission(AgencyInfo agencyInfo);
}
