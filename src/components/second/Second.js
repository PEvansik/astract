

import Process from "./Process"
import candidate from '../asset/second/candidate.svg'
import member from '../asset/second/member.svg'
import observer from '../asset/second/observer.svg'
import user from '../asset/second/user.svg'


const Second = () => {
    return (
        <div className="Second">
            <div className="secontainer">
                <h3>Changing the dynamics of female inclusivity in politics forever.</h3>

                <div className="process-holder">
                    <Process 
                        secimg={observer}
                        sechead='Observer/Reporter'
                        secpar="Morbi dis nibh nec eget. Dui lobortis mauris arcu id nec phasellus risus nunc ipsum."
                        secalt="observer"
                    />
                    <Process 
                        secimg={candidate}
                        sechead='Running Candidate'
                        secpar="Morbi dis nibh nec eget. Dui lobortis mauris arcu id nec phasellus risus nunc ipsum."
                        secalt="candidate"
                    />
                    <Process 
                        secimg={member}
                        sechead='DTR Member'
                        secpar="Morbi dis nibh nec eget. Dui lobortis mauris arcu id nec phasellus risus nunc ipsum."
                        secalt="member"
                    />
                    <Process 
                        secimg={user}
                        sechead='General User'
                        secpar="Morbi dis nibh nec eget. Dui lobortis mauris arcu id nec phasellus risus nunc ipsum."
                        secalt="user"
                    />
                </div>
            </div>
        </div>
    )
}


export default Second
