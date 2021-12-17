import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import AuthContext from "../components/AuthContext";

export default function Vip() {
  const { user, authReady } = useContext(AuthContext);
  const [vipContent, setVipContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/premiumContent",
        user && {
          headers: {
            Authorization: `Bearer ${user.token.access_token}`,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("Please login");
          }

          return res.json();
        })
        .then((data) => {
          setVipContent(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setVipContent(null);
        });
    }
  }, [user, authReady]);

  return (
    <div className="container">
      <Head>
        <title>VIP</title>
        <meta name="description" content="VIP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">VIP</h1>

        {!authReady && <div>Loading...</div>}

        {error && (
          <div>
            <p className="description">
              You need to logged in to access this page!
            </p>
            <div>{error}</div>
          </div>
        )}

        <div className="grid">
          {vipContent &&
            vipContent.map((vip) => {
              <a href={vip.link} className="card">
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>;
            })}
        </div>
      </main>

      <footer className="footer">Pretty cool™</footer>
    </div>
  );
}
