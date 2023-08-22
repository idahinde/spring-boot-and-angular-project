package com.heathify.repository;

import com.heathify.model.Dietician;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public interface DieticianRepository extends CrudRepository<Dietician, Long> {

    @Query("select d from Dietician d where d.details.emailAddress=?1 and d.details.password=?2")
    Dietician loginDietician(String username, String password);

}
