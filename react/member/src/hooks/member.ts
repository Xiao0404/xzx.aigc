import { useState } from 'react';
import { MemberEntity } from '../types/member';
import { getMembersCollection } from '../api/memberApi';

export const useMemberCollection = () => {
        const [memberCollection,setMemberCollection] = useState<MemberEntity[]>([]);

        const loadMoemberCollection = async () => {
                const members = await getMembersCollection();
                setMemberCollection(members)
        }

        return {
            memberCollection,
            loadMoemberCollection
        }
}