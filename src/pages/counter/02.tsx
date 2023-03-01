import CounterComponent from "@/components/counter/02/CounterComponent";
import Link from "next/link";

export default function Counter() {
  return (
    <div className="layout">
      <Link href="/" className="link home">
        <h5>go home</h5>
      </Link>
      <CounterComponent />
    </div>
  )
}