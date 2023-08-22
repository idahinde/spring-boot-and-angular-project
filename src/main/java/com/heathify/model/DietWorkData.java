package com.heathify.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * @Author: idris is'haq
 * @E-Mail: idahinde@gmail.com
 * @Date: 28 Oct, 2022
 */

@Entity
public class DietWorkData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String prescription;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(targetEntity = Appointment.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "appointment_id")
    private Appointment appointment;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPrescription() {
        return prescription;
    }

    public void setPrescription(String prescription) {
        this.prescription = prescription;
    }

    public Appointment getAppointment() {
        return appointment;
    }

    public void setAppointment(Appointment appointment) {
        this.appointment = appointment;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("DietWorkData{");
        sb.append("id=").append(id);
        sb.append(", prescription='").append(prescription).append('\'');
        sb.append(", appointment=").append(appointment);
        sb.append('}');
        return sb.toString();
    }

}
