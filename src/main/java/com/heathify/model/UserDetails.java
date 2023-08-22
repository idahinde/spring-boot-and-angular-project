package com.heathify.model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = "phoneNumber"), @UniqueConstraint(columnNames = "emailAddress")})
public class UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String phoneNumber;

    @Embedded
    private Details details;

    private String age;
    private String height;
    private String currentWeight;
    private String targetWeight;
    private Timestamp registrationTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Details getDetails() {
        return details;
    }

    public void setDetails(Details details) {
        this.details = details;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getCurrentWeight() {
        return currentWeight;
    }

    public void setCurrentWeight(String currentWeight) {
        this.currentWeight = currentWeight;
    }

    public String getTargetWeight() {
        return targetWeight;
    }

    public void setTargetWeight(String targetWeight) {
        this.targetWeight = targetWeight;
    }

    public Timestamp getRegistrationTime() {
        return registrationTime;
    }

    public void setRegistrationTime(Timestamp registrationTime) {
        this.registrationTime = registrationTime;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("UserDetails{");
        sb.append("id=").append(id);
        sb.append(", phoneNumber='").append(phoneNumber).append('\'');
        sb.append(", details=").append(details);
        sb.append(", age='").append(age).append('\'');
        sb.append(", height='").append(height).append('\'');
        sb.append(", currentWeight='").append(currentWeight).append('\'');
        sb.append(", targetWeight='").append(targetWeight).append('\'');
        sb.append(", registrationTime=").append(registrationTime);
        sb.append('}');
        return sb.toString();
    }

}
