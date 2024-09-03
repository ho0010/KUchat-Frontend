import { create } from "zustand";
import { LanguageOption } from "../pages/Signup/components/Language";
import { HometownOption } from "../pages/Signup/components/Nation";

interface SignupState {
  setLanguage: LanguageOption | null;
  firstLanguage: LanguageOption | null;
  secondLanguage: LanguageOption | null;
  hometown: HometownOption | null;
  name: string | null;
  department: string | null;
  studentId: string | null;
  gender: string | null;
  birthday: string | null;
  setAppLanguage: (language: LanguageOption) => void;
  setStudyLanguageFirst: (language: LanguageOption) => void;
  setStudyLanguageSecond: (language: LanguageOption) => void;
  setNation: (nation: HometownOption) => void;
  setName: (name: string) => void;
  setDepartment: (department: string) => void;
  setStudentId: (studentId: string) => void;
  setGender: (gender: string) => void;
  setBirthday: (birth: string) => void;
}

const useSignupStore = create<SignupState>((set) => ({
  setLanguage: null,
  firstLanguage: null,
  secondLanguage: null,
  hometown: null,
  name: null,
  department: null,
  studentId: null,
  gender: null,
  birthday: null,
  setAppLanguage: (language) => set({ setLanguage: language }),
  setStudyLanguageFirst: (language) => set({ firstLanguage: language }),
  setStudyLanguageSecond: (language) => set({ secondLanguage: language }),
  setNation: (hometown) => set({ hometown: hometown }),
  setName: (name) => set({ name: name }),
  setDepartment: (department) => set({ department: department }),
  setStudentId: (studentId) => set({ studentId: studentId }),
  setGender: (gender) => set({ gender: gender }),
  setBirthday: (birthday) => set({ birthday: birthday }),
}));
export default useSignupStore;
