// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItems} = props
  const {title, description, publishedDate} = blogItems

  return (
    <li>
      <div className="title-card">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
