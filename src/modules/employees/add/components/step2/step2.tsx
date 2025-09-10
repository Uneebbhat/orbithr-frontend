import { Button } from "@/components/ui/button";

import HiringForm from "./hiring-form";

interface Step2Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Step2({ onNext, onPrev }: Step2Props) {
  return (
    <>
      <section className="px-4 md:px-6">
        <h2 className="text-xl font-bold mb-6">Contract</h2>
        <HiringForm />
      </section>

      <section className="px-4 md:px-6">
        <div className="flex item-center gap-4">
          <Button onClick={onPrev} variant={"destructive"}>
            Go back
          </Button>
          <Button onClick={onNext}>Next</Button>
        </div>
      </section>
    </>
  );
}
