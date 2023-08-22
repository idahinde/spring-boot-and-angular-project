package com.heathify.model;

import javax.persistence.*;

@Entity
public class AdminDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adminId;

    @Embedded
    private Details details;

    public Long getAdminId() {
        return adminId;
    }

    public void setAdminId(Long adminId) {
        this.adminId = adminId;
    }

    public Details getDetails() {
        return details;
    }

    public void setDetails(Details loginDetails) {
        this.details = loginDetails;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("AdminDetails{");
        sb.append("adminId=").append(adminId);
        sb.append(", details=").append(details);
        sb.append('}');
        return sb.toString();
    }
}
