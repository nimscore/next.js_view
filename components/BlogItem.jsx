import Link from "next/link";

const BlogItem = ({title, description, id}) => {
	return (
		<>
			<div className="blog-item">
				<h5>{title}</h5>
				
				<p>
					{description}
				</p>
				
				<div className="text-align-right">
					<Link href='/blog/[id]' as={`/blog/${id}`}>
						Прочитать
					</Link>
				</div>
			</div>
		</>
	)
}

export default BlogItem