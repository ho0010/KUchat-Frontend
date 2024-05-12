import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const Language = () => {
  const { register, errors, status } = useFormContext();

  return (
    <input
      type="text"
      status={status}
      {...register("school")}
      errorMessage={
        errors.school && typeof errors.school.message === "string"
          ? errors.school.message
          : undefined
      }
      placeholder="학교 이름을 검색해주세요."
      onChange={inputchangeHandler}
    />
  );
};

export default Language;
