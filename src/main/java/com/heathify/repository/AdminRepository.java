package com.heathify.repository;

import com.heathify.model.AdminDetails;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public interface AdminRepository extends CrudRepository<AdminDetails, Long> {

    @Query("select a from AdminDetails a where a.details.emailAddress=?1 and a.details.password=?2")
    AdminDetails adminLoginEvent(String email, String password);
}
