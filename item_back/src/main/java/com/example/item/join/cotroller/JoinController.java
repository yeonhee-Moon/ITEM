package com.example.item.join.cotroller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.item.join.service.JoinService;

@RestController
@RequestMapping("/item")
public class JoinController {
	
	@Autowired
	JoinService joinService;
	
	@PostMapping("/join")
	public ResponseEntity<Object> itemJoin(String username, String userid, String password, String email) {

		Map<String, Object> param = new HashMap<>();
		
		System.out.println("username: "+ username);
		System.out.println("userid: "+ userid);
		System.out.println("password: "+ password);
		System.out.println("email: "+ email);
		
		param.put("username", username);
		param.put("userid", userid);
		param.put("password", password);
		param.put("email", email);
		param.put("team", 0);
		
		int result = joinService.join(param);
		
 		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> itemLogin(String userid, String password) {
		
		Object valueName = null;
		Object valueAuthor = null;
		Object valueMatching = null;
		
		Map<String, Object> responseData = new HashMap<>();
		
		try {
			Map<String, Object> param = new HashMap<>();
			
			System.out.println("userid: "+ userid);
			System.out.println("password: "+ password);
			
			param.put("userid", userid);
			param.put("password", password);
	
			Map<String, Object> result = joinService.login(param);
			
			valueName = result.get("USER_NAME");
			valueAuthor = result.get("AUTHOR");
			Object valueTeam = result.get("TEAM");
			
			int value = (Integer) valueTeam;
			
			if (value != 0) {
			System.out.println("team: " + valueTeam);
			param.put("team", valueTeam);
			
			Map<String, Object> resultMatching = joinService.matchingname(param);
			valueMatching = resultMatching.get("USER_NAME");
			}
			else {
				valueAuthor =3;
	        	valueMatching = "매칭해주세요";
			}
			
	        responseData.put("USER_NAME", valueName);
	        responseData.put("AUTHOR", valueAuthor);
	        responseData.put("matchingname", valueMatching);
	        responseData.put("TEAM", valueTeam);
			
			
			
	        return ResponseEntity.ok(responseData);
		    // NullPointerException이 발생할 수 있는 코드
		    // 예를 들어, 어떤 객체의 메서드나 속성을 호출하는 경우
		    // 그 객체가 null이라면 NullPointerException이 발생할 수 있음
		} catch (NullPointerException e) {
			// NullPointerException이 발생했을 때 처리할 코드
		    // 여기에는 아무런 동작이나 로깅 등을 할 수 있음
		    // 아무것도 하지 않고 무시하려면 비워둘 수도 있음
			int exceptInt = 1;
			Map<String, Object> except = new HashMap<>();
			except.put("except", exceptInt);
			return ResponseEntity.ok(except);
		}
	}
	
	@PostMapping("/findid")
	public ResponseEntity<Object> itemFindid(String username, String email) {

		Map<String, Object> param = new HashMap<>();
		
		System.out.println("username: "+ username);
		System.out.println("email: "+ email);

		
		param.put("username", username);
		param.put("email", email);

		Map<String, Object> result = joinService.findid(param);
		
		Object value = result.get("USER_ID");
		System.out.println("USER_ID: "+ value);
 		return ResponseEntity.ok(value);
	}
	
	@PostMapping("/reset")
	public ResponseEntity<Object> itemReset(String password, String userid) {

		Map<String, Object> param = new HashMap<>();
		
		System.out.println("password: "+ password);
		System.out.println("userid: "+ userid);
		
		param.put("password", password);
		param.put("userid", userid);

		int result = joinService.reset(param);
		
 		return ResponseEntity.ok(result);
	}
}
