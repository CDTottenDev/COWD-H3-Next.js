import Link from "next/link"

export default function COWDfooter() {
  return (
    <footer className="w-full py-2 px-4 bg-gradient-to-r from-[#e9e9e9] to-[#61e0b6] text-white text-sm">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left mb-2 sm:mb-0 text-black">
          Designed by{" "}
          <Link
            href="https://centralorgeonwebdesigns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline text-[#862a2a]"
          >
            Central Oregon Web Design&apos;s
          </Link>
        </p>
        <p className="text-center sm:text-right">
          <span className="font-light text-[#594894]">Elevating businesses through stunning web solutions</span> |{" "}
          <span className="font-medium text-[#000000]">C.D. Totten</span>
        </p>
      </div>
    </footer>
  )
}
