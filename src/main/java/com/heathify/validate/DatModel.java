package com.heathify.validate;

import java.time.LocalDate;

public class DatModel {

    @DateValidation
    private LocalDate localDate;

    public LocalDate getLocalDate() {
        return localDate;
    }

    public void setLocalDate(LocalDate localDate) {
        this.localDate = localDate;
    }

}
