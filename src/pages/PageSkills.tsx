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
						<>
							{totaledSkill.skill.name ? (
								<div className="totaledSkill found">
									<div className="name">
										<span className="total">
											{totaledSkill.total}x
										</span>{' '}
										{totaledSkill.skill.name}
										{totaledSkill.isOpen && (
											<div className="openArea">nnn</div>
										)}
									</div>
								</div>
							) : (
								<div className="totaledSkill missing">
									<div className="name">
										<span className="total">
											{totaledSkill.total}x
										</span>{' '}
										{totaledSkill.skill.idCode}{' '}
									</div>
								</div>
							)}
						</>
					);
				})}
			</div>
		</div>
	);
};
