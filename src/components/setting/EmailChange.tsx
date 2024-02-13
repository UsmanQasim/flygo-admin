"use client";
import React from "react";
import Link from "next/link";
import { IProfileData } from "@/services/proflie";
import moment from "moment";

type emailChangeType = {
  profile: IProfileData | undefined;
};

const EmailChange = (props: emailChangeType) => {
  const { profile } = props;

  return (
    <div className="card">
      <div className="row">
        <div className="col-sm-6">
          <div className="card-header">
            <h5>Credit</h5>
          </div>
          <div className="card-body">
            <form
              className="theme-form mega-form"
              onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                event.preventDefault()
              }
            >
              {/* <div className="mb-3">
                <label className="form-label-title ">Credit Limit</label>
                <input
                  className="form-control"
                  type="text"
                  readOnly
                  placeholder="Credit Limit"
                  value={profile?.creditLimit || ""}
                />
              </div> */}
              {/* <div className="mb-3">
                <label className="form-label-title ">Service Charges</label>
                <input
                  className="form-control"
                  type="text"
                  readOnly
                  placeholder="Service Charges"
                  value={profile?.serviceCharges || ""}
                />
              </div> */}
              <div className="mb-3">
                <label className="form-label-title ">
                  FlyGO Available Balance
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Wallet"
                  readOnly
                  value={profile?.wallet || ""}
                />
              </div>
              {/* <Link href={"/setting"}>
                <button className="btn btn-primary"> Change Email</button>
              </Link> */}
            </form>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card-header">
            <h5>Other Details</h5>
          </div>
          <div className="card-body">
            <form
              className="theme-form mega-form"
              onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
                event.preventDefault()
              }
            >
              <div className="mb-3">
                <label className="form-label-title ">Akama No</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder=" Akama No"
                  readOnly
                  value={profile?.akama}
                />
              </div>
              <div className="mb-3">
                <label className="form-label-title "> Company Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder=" Company Name"
                  readOnly
                  value={profile?.companyName || ""}
                />
              </div>
              <div className="mb-3">
                <label className="form-label-title "> Creation Date</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder=" Creation Date"
                  readOnly
                  value={moment(profile?.createdAt).format("LL")}
                />
              </div>
              {/* <Link href={"/setting"}>
                <button className="btn btn-primary"> Change Password</button>
              </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailChange;
