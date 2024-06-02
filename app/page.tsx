import {BlogPosts} from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Felix Kästner
      </h1>
      <p className="mb-4">
        {`I'm a Senior Software Engineer, Vim enthusiast and certified
        Google Cloud Digital Leader specializing in cloud-native technologies.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
