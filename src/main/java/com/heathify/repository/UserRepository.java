package com.heathify.repository;

import com.heathify.model.UserDetails;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import javax.persistence.Tuple;

@Service
public interface UserRepository extends CrudRepository<UserDetails, Long> {

    UserDetails findByDetailsEmailAddressAndDetailsPassword(String emailAddress, String password);

    @Query(value = "SELECT u FROM UserDetails u where u.id=:id")
    Tuple findData(long id);

    Slice<String> findPhoneNumberById(long id);

}
