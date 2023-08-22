package com.heathify.repository;

import com.heathify.model.DietWorkData;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DietWorkDataRepository extends CrudRepository<DietWorkData, Long> {

    @Query("select d from DietWorkData d where d.appointment.dietician.id=?1")
    List<DietWorkData> fetchAllDieticianWorkOutData(Long id);

    @Query("select d from DietWorkData d where d.appointment.userDetails.id=?1")
    List<DietWorkData> fetchAllUserWorkOutData(Long id);

}
