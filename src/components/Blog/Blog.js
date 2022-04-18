import React from "react";

const Blog = () => {
  return (
    <div className="md:w-5/6 mx-auto">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
        <h1 className="text-center text-2xl font-semibold my-5">
          Difference between authorization and authentication ?
        </h1>
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-lg text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                Authentication
              </th>
              <th scope="col" class="px-6 py-3">
                Authorization
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b  hover:bg-gray-50">
              <td class="px-6 py-4">
                Check details about the person details for identify him.
              </td>
              <td class="px-6 py-4">Check what things can access the user.</td>
            </tr>
            <tr class="bg-white border-b  hover:bg-gray-50">
              <td class="px-6 py-4">It happened before authorization.</td>
              <td class="px-6 py-4">It happened before authentication.</td>
            </tr>
            <tr class="bg-white border-b  hover:bg-gray-50">
              <td class="px-6 py-4">Verify user's credential</td>
              <td class="px-6 py-4">Validates user's permission</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
      <h1 className="text-center text-2xl font-semibold my-5">
      Why are you using firebase? What other options do you have to implement authentication?
        </h1>
        <p>Firebase is a time-saving alternative of writing backend code for dynamic apps.it can be host website.With Firebase,i can connect and use built-in authentication providers, including Google, Facebook, Twitter, Github. and this all are free which save development cost.Also they have paid premium system. by this we can create database and reuse it.Firebase have analytics system. it provies so much details.that's why i using firebase</p>
        <h1 className="text-lg font-semibold">other implement authentication given below: </h1>
        <ul className="ml-4 list-disc">
            <li>The Okta Identity Cloud</li>
            <li>WatchGuard AuthPoint</li>
            <li>LastPass for Business</li>
            <li>Cisco Secure Access by Duo</li>
            <li>Azure Active Directory</li>
            <li>Google Authenticator</li>
        </ul>
      </div>
      <div className="mb-10">
      <h1 className="text-center text-2xl font-semibold my-5">
      What other services does firebase provide other than authentication
        </h1>
        <ul className="ml-4 list-disc">
            <li>Helping build apps faster</li>
            <li>Releasing apps with confidence, performance, and stability</li>
            <li>Increasing user engagement after releasing the app </li>
            <li>Firebase App Distribution now supports Android App Bundles for streamlined testing.</li>
            <li>New modularized Web SDKs improve load times</li>
            <li>Strengthening app security with App Check.</li>
            <li>Remote Configuration</li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
