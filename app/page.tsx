import Link from "next/link";

export default function Home() {
  return (
    <article>
      <div>
        <h1 className="text-xl">Ondřej Hájek</h1>
      </div>
      <div className="mt-10">
        <p className="text-neutral-500 text-sm">/known as: Ohaacko/</p>
        <p>
          Passionate fe dev. Building details in user interfaces. Crafting web
          apps for effciency. I have used far more
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div">
            {" "}
            {`<div>`}{" "}
          </Link>
          tags than you.
        </p>
      </div>
      <div className="flex justify-between mt-10">
        <div>
          <h2 className="font-semibold text-lg mb-3">Coded myself</h2>
          <div className="flex flex-col gap-2">
            <div>
              <Link
                href="https://github.com/OndrejHj04/rezervak-gjkt"
                className="underline underline-offset-2"
              >
                Chata GJKT
              </Link>
              <p className="text-sm text-neutral-500">
                Reservation system for a school cottage.
              </p>
            </div>
            <div>
              <Link
                href="https://github.com/OndrejHj04/stock"
                className="underline underline-offset-2"
              >
                Burza
              </Link>
              <p className="text-sm text-neutral-500">
                Stock trading game for a summer camp.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-3">Worked on</h2>
          <div className="flex flex-col gap-2">
            <div>
              <Link
                href="https://bvsp.rezervin.app"
                className="underline underline-offset-2"
              >
                Rezervin
              </Link>
              <p className="text-sm text-neutral-500">
                Reservation system for sport clubs.
              </p>
            </div>
            <div>
              <Link
                href="https://bvsp.cz"
                className="underline underline-offset-2"
              >
                BVŠP
              </Link>
              <p className="text-sm text-neutral-500">
                Sport club website with interface for user actions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-semibold text-lg mb-3">Writing</h2>
        <p>
          <Link
            className="underline underline-offset-2"
            href="https://www.tipsport.cz/verejny-profil/BRaM0B_ksHXGun7q5_fbQA/blogy"
          >
            Articles
          </Link>{" "}
          about football, fan culture and experience from stadiums every week.
        </p>
      </div>
      <div className="mt-10">
        <h2 className="font-semibold text-lg mb-3">My fields of interest</h2>
        <ul className="list-disc list-inside">
          <li>Further exploring Next.js</li>
          <li>Creating PDE in Neovim</li>
          <li>Throwing first 180 on dartsboard</li>
          <li>
            Algorithm mastery (and completing{" "}
            <Link
              className="underline underline-offset-2"
              href="https://adventofcode.com"
            >
              AOC
            </Link>
            )
          </li>
          <li>
            Defeating{" "}
            <Link
              href="https://bloons.fandom.com/wiki/Boss_Bloon_Event_(BTD6)"
              className="underline underline-offset-2"
            >
              BTD6 boss
            </Link>{" "}
            every week
          </li>
          <li>Contributing to open source</li>
        </ul>
      </div>
      <div className="mt-10">
        <hr className="border-neutral-500" />
        <div className="flex gap-3 my-3">
          <Link
            href="https://github.com/OndrejHj04"
            className="underline underline-offset-2"
          >
            github
          </Link>

          <Link
            href="https://www.linkedin.com/in/ond%C5%99ej-h%C3%A1jek-600527206"
            className="underline underline-offset-2"
          >
            linkedin
          </Link>

          <Link
            href="mailto:ondrej.hajek.profi@gmail.com"
            className="underline underline-offset-2"
          >
            email
          </Link>
        </div>
      </div>
    </article>
  );
}
