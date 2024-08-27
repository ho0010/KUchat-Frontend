import { create } from "zustand";
import { LanguageOption } from "../pages/Signup/components/Language";
import { NationOption } from "../pages/Signup/components/Nation";

interface SignupState {
  appLanguage: LanguageOption | null;
  studyLanguageFirst: LanguageOption | null;
  studyLanguageSecond: LanguageOption | null;
  nation: NationOption | null;
  name: string | null;
  studentInfo: string | null;
  gender: string | null;
  birth: string | null;
  setAppLanguage: (language: LanguageOption) => void;
  setStudyLanguageFirst: (language: LanguageOption) => void;
  setStudyLanguageSecond: (language: LanguageOption) => void;
  setNation: (nation: NationOption) => void;
  setName: (name: string) => void;
  setStudentInfo: (studentInfo: string) => void;
  setGender: (gender: string) => void;
  setBirth: (birth: string) => void;
}

const useSignupStore = create<SignupState>((set) => ({
  appLanguage: null,
  studyLanguageFirst: null,
  studyLanguageSecond: null,
  nation: null,
  name: null,
  studentInfo: null,
  gender: null,
  birth: null,
  setAppLanguage: (language) => set({ appLanguage: language }),
  setStudyLanguageFirst: (language) => set({ studyLanguageFirst: language }),
  setStudyLanguageSecond: (language) => set({ studyLanguageSecond: language }),
  setNation: (nation) => set({ nation: nation }),
  setName: (name) => set({ name: name }),
  setStudentInfo: (studentInfo) => set({ studentInfo: studentInfo }),
  setGender: (gender) => set({ gender: gender }),
  setBirth: (birth) => set({ birth: birth }),
}));
export default useSignupStore;
