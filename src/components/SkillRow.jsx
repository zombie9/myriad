import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { MACRO_PREFIX, stats, skillStatOptions } from '../constants';
import { Context } from '../context/context';
import {
  SkillBlock,
  Row,
  StatField,
  DescriptionField,
  TopRow,
  LevelField,
  SkillLabel,
  DiceBox
} from '../styles/sharedStyles';

const D20 = styled.svg`
  transform: rotate(0deg);
  transition: all 0.3s ease-out;
  transform: ${(props) => (props.spin ? `rotate(360deg)` : '')};
`;

const SkillRow = ({ field, index }) => {
  const { character, setCharacter } = useContext(Context);
  const [spin, setSpin] = useState(false);

  const buildMacro = (stat, skill) => {
    return `${MACRO_PREFIX}${character.stats[stat]}+${skill}`;
  };

  const handleChange = (event) => {
    let updatedSkills = [...character.skills];
    updatedSkills[index] = { ...field, [event.target.name]: event.target.value };
    setCharacter({
      ...character,
      skills: updatedSkills
    });
  };

  return (
    <SkillBlock>
      <TopRow>
        <SkillLabel
          name="name"
          value={field.name}
          placeholder="Skill Name"
          onChange={(event) => handleChange(event)}
        />
        <DiceBox>
          <D20
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            height="1.5rem"
            width="1.5rem"
            spin={spin}
            onClick={() => {
              setSpin((prevState) => !prevState);
              const diceMacro = buildMacro(field.stat.toLowerCase(), field.value);
              navigator.clipboard.writeText(diceMacro);
              console.log(diceMacro);
            }}
          >
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
              <path d="M2885,3831.4C1748,3178.7,798.6,2623.6,775.7,2596.8l-44-47.9V139.1c0-1718.8,5.7-2423.2,21.1-2455.7c15.3-34.5,580-369.4,2113.1-1255.6C4018.1-4236.4,4977-4780,5000-4780s981.9,543.6,2134.2,1207.8C8667.3-2686,9232-2351,9247.3-2316.6c15.3,32.5,21.1,736.9,21.1,2455.7v2409.8l-42.1,47.9C9165,2663.8,5051.7,5020,4996.2,5020C4971.3,5018.1,4021.9,4484.1,2885,3831.4z M6165.7,3322.2L7316,2024.5l-1158-5.7c-637.4-1.9-1678.6-1.9-2316,0l-1158,5.7l1150.4,1297.7C4466,4034.3,4990.4,4618,5000,4618C5007.7,4618,5532.1,4034.3,6165.7,3322.2z M3267.8,3144.2c-534-601-976.2-1091-983.8-1087.2c-7.7,3.8-248.8,109.1-535.9,235.4c-336.9,149.3-511.1,235.4-495.7,245c111,70.8,2974.5,1709.3,2978.3,1705.4C4234.4,4241,3801.8,3745.2,3267.8,3144.2z M8717.1,2554.7l49.7-32.5l-528.3-233.5c-290.9-128.2-534-229.7-541.7-223.9c-21.1,11.5-1931.3,2166.7-1931.3,2176.3C5765.6,4248.6,8581.2,2638.9,8717.1,2554.7z M1598.7,2024.5c407.7-179.9,537.9-245,534-268c-5.7-32.5-1037.4-2966.8-1073.8-3052.9c-13.4-32.5-19.1,511.1-19.1,1757.1c-1.9,991.5,1.9,1803,7.7,1803C1053.2,2263.8,1302,2156.6,1598.7,2024.5z M8962.1,460.7c0-991.5-3.8-1797.3-7.7-1793.5c-11.5,9.6-1077.6,3045.3-1087.2,3087.4c-3.8,24.9,111,84.2,530.2,269.9c294.8,130.2,541.7,237.3,551.2,239.3C8956.4,2263.8,8962.1,1452.2,8962.1,460.7z M7331.3,1595.8C6372.4-102,5007.7-2500.4,5000-2502.3c-7.7,0-2009.8,3520-2321.8,4080.8l-72.7,130.2H5000h2394.5L7331.3,1595.8z M3541.5-561.4C4176.9-1683,4691.8-2605.6,4686.1-2613.3c-13.4-13.4-3556.3,474.7-3573.6,491.9C1099.1-2108,2358.6,1479,2375.8,1479C2381.4,1477.1,2907.9,560.2,3541.5-561.4z M8259.6-295.4c342.6-978.1,625.9-1789.7,629.7-1803c5.7-26.8-606.8-118.7-3271.1-486.2l-331.2-44l72.7,126.3c449.8,807.7,2254.8,3979.3,2264.3,3981.2C7629.9,1479,7915.1,680.8,8259.6-295.4z M3271.4-2739.6c855.6-118.7,1560-220.1,1565.7-225.8c5.7-5.7,7.7-319.7,5.7-700.5l-5.7-689.1l-1540.8,890c-847.9,488.1-1561.9,901.5-1588.7,914.9c-26.8,15.3-36.4,26.8-19.1,26.8C1704-2523.3,2417.9-2619,3271.4-2739.6z M7555.3-2975c-432.6-248.8-1146.5-660.4-1588.7-916.8L5162.7-4357l-5.7,691c-1.9,380.9,0,694.8,5.7,700.5c9.6,9.6,3045.3,438.3,3129.5,442.2C8319-2521.4,8008.9-2710.9,7555.3-2975z" />
            </g>
          </D20>
        </DiceBox>
      </TopRow>
      <Row>
        <StatField
          name="stat"
          value={field.stat ? field.stat : ''}
          onChange={(event) => handleChange(event)}
        >
          <option value="" disabled>
            {skillStatOptions.DEFAULT}
          </option>
          <option value={stats.STRENGTH}>{skillStatOptions.STR}</option>
          <option value={stats.INTELLIGENCE}>{skillStatOptions.INT}</option>
          <option value={stats.DEXTERITY}>{skillStatOptions.DEX}</option>
        </StatField>
        <DescriptionField
          rows={field.description.split('\n').length + 1}
          name="description"
          value={field.description}
          placeholder="Description"
          onChange={(event) => handleChange(event, 'description')}
        />
        <LevelField
          name="value"
          value={field.value}
          placeholder="Value"
          onChange={(event) => handleChange(event)}
        />
      </Row>
    </SkillBlock>
  );
};

export default SkillRow;
