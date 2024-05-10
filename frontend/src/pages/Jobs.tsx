import { useEffect, useState } from 'react';
import Application from '../components/Application';
import { ApplicationType } from '../types/Application.type';
import "./Jobs.styles.css"
import { getAllApplications } from '../utils/api';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

export const Jobs = () => {
	const [applications, setApplications] = useState<null | ApplicationType[]>(null);
	const { user } = useAuthContext()
	
	useEffect(() => {
		if (user) {
			getAllApplications(user.token)
				.then(data => {
					setApplications(data.applications)
				})
		}
	}, [user]);

	return (
		<div>
			<div className='count'>
				<h1>{applications?.length || "0"} </h1>
				<p>jobs applied to</p>
			</div>

			<div>
				{applications && applications.map(application => (
					<Link to={`/jobs/${application._id}`} key={application._id.toString()}>
						<Application application={application} />
					</Link>
				))}
			</div>
		</div>
	)
}
