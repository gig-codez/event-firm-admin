import React from 'react'
import Seo from '../../../shared/layout-components/seo/seo'
import Link from 'next/link'

const Error500 = () => {
  return (
    <div>
        <Seo title="Error 505"/>

     {/* <!-- Row --> */}
	 <div className="error-bg">

	 <div className="page main-signin-wrapper bg-primary construction">

<div className="container">
	<div className="construction1 text-center details text-fixed-white">
		<div className="">
			<div className="col-lg-12">
				<h1 className="fs-140 mb-0">500</h1>
			</div>
			<div className="col-lg-12 ">
				<h1>Oops.The Page you are looking  for {`doesn't`}  exit..</h1>
				<h6 className="fs-15 mt-3 mb-4 text-white-50">You may have mistyped the address or the page may have moved. Try searching below.</h6>
				<Link className="btn ripple btn-secondary text-center mb-2" href={`/components/dashboard/dashboard`}>Back to Home</Link>
			</div>
		</div>
	</div>
</div>

</div>
</div>
	{/* <!-- End Row --> */}
    </div>
  )
}
Error500.layout = "Authenticationlayout"

export default Error500