package com.heathify.validate;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.time.LocalDate;

public class DateValidationImpl implements ConstraintValidator<DateValidation, LocalDate> {

    private int day;
    private int month;
    private int year;

    @Override
    public void initialize(DateValidation validation) {
        this.day = validation.day();
        this.month = validation.month();
        this.year = validation.year();
    }

    @Override
    public boolean isValid(LocalDate value, ConstraintValidatorContext context) {
        LocalDate localDate = LocalDate.of(year, month, day);
        LocalDate previousDate = localDate.minusDays(180);
        return (!value.isBefore(localDate)) && value.isAfter(previousDate);
    }

}
