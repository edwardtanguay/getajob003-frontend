import { useContext } from 'react';
import { AppContext } from '../appContext';

export const PageSkills = () => {
	const { totaledSkills } = useContext(AppContext);
	return (
		<div className="page pageSkills">
			<h2>Skills</h2>
			<div className="totaledSkills">
				{totaledSkills.map((totaledSkill, i) => {
					return (
						<div
							className={`totaledSkill ${
								totaledSkill.skill.name ? 'found' : 'missing'
							}`}
						>
							<div className="mainArea">
								<span className="total">
									{totaledSkill.total}x
								</span>{' '}
								<span className="name">
									{totaledSkill.skill.name}
								</span>
							</div>
							{totaledSkill.isOpen && (
								<div className="openArea">nnn</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
