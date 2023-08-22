package com.heathify.validate;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;

import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Documented
@Retention(RUNTIME)
@java.lang.annotation.Target({ElementType.FIELD, ElementType.METHOD, ElementType.PARAMETER})
@Constraint(validatedBy = DateValidationImpl.class)
public @interface DateValidation {

    int day() default 1;

    int month() default 11;

    int year() default 2022;

    String message() default "Date must be less 180 ";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

}
