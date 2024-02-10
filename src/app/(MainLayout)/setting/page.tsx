"use client";
import EmailChange from "@/components/setting/EmailChange";
import PersonalInformation from "@/components/setting/PersonalInformation";
import { GetAgentProfile, IProfileData } from "@/services/proflie";
import { useEffect, useState } from "react";

const Setting = () => {
  const [profile, setProfile] = useState<IProfileData>();

  useEffect(() => {
    GetAgentProfile().then((res) => setProfile(res));
  }, []);

  return (
    <div className="container-fluid">
      <PersonalInformation profile={profile} />
      <EmailChange profile={profile} />
    </div>
  );
};

export default Setting;
