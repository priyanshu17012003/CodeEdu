import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

function ShowProfile() {
  const [authUser] = useAuth();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      try {
        if (authUser) {
          await axios
            .get(`/api/profile/showProfile/${authUser.id}`)
            .then((res) => {

              setProfile({
                name: res.data.user.name,
                email: res.data.user.email,
                college: res.data.user.college,
                pronoun: res.data.user.pronoun,
                linkdin: res.data.user.linkdin,
                skills: res.data.user.skills,
                bio: res.data.user.bio,
                languages: res.data.user.languages,
                github: res.data.user.github,
              });

            });
        }
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, [authUser]);

  return (
    <div className="hero bg-gradient-to-b from-[#1d1d1d] via-[#1d1d1d] to-[#041c31] flex flex-col min-h-screen justify-center items-center md:flex-row-reverse">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center mx-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-500">
              Welcome!
            </span>
            You are just one step away from being a part of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-500">
              CodeEdu
            </span>
          </h1>
        </div>

        <div className="card bg-base-100 shrink-0 shadow-2xl w-full max-w-screen-md p-4">
          <div className="card-body">
            <div className="form-control">
              <h2 className="text-2xl font-bold mb-4 text-violet-600">
                Profile
              </h2>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                value={profile.name}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                value={profile.email}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pronoun</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="pronoun"
                value={profile.pronoun}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">College</span>
              </label>
              <input
                type="text"
                placeholder="college name"
                className="input input-bordered"
                name="college"
                value={profile.college}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Linkedln</span>
              </label>
              <input
                type="text"
                placeholder="url"
                className="input input-bordered"
                name="linkdin"
                value={profile.linkdin}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Github</span>
              </label>
              <input
                type="text"
                placeholder="url"
                className="input input-bordered"
                name="github"
                value={profile.github}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Skills</span>
              </label>
              <input
                type="text"
                placeholder="leave space between skills"
                className="input input-bordered"
                name="skills"
                value={profile.skills}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Languages</span>
              </label>
              <input
                type="text"
                placeholder="leave space between skills"
                className="input input-bordered"
                name="skills"
                value={profile.languages}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">About You</span>
              </label>
              <textarea
                type="text"
                placeholder="Bio"
                className="input input-bordered"
                name="bio"
                value={profile.bio}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProfile;
