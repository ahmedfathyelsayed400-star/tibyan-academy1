type Feature = {
  icon: string;
  title: string;
  description: string;
};

type CourseFeaturesProps = {
  badge: string;
  title: string;
  description: string;
  features: Feature[];
};

export default function CourseFeatures({
  badge,
  title,
  description,
  features,
}: CourseFeaturesProps) {
  return (
    <section className="bg-[#0d0d0d] py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-lg font-bold text-yellow-500">
            {badge}
          </span>

          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {description}
          </p>

        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl border border-yellow-600 bg-black p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400"
            >

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500 text-4xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-yellow-500">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-300">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}