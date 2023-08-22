package com.heathify.repository;

import com.heathify.model.Appointment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public interface AppointmentRepository extends CrudRepository<Appointment, Long> {

    @Query("select a from Appointment a where a.userDetails.id=?1")
    Iterable<Appointment> fetchUserAppointment(Long userId);

    @Query("select a from Appointment a where a.dietician.id=?1 and a.status=?2")
    Iterable<Appointment> fetchDieticianAppointment(Long userId, String status);

}
