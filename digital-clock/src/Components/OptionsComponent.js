import React from "react";

export default function OptionsComponent(props){
    return (
        <div class='options'>
        <label>
            <input 
                type='checkbox'
                name='showSeconds'
                checked={props.showSeconds}
                onChange={props.handleChange}
            />
            <span class='option-label'> Show Seconds? </span>
        </label> 
        <br />
        <label>
            <input 
                type='checkbox'
                name='hour12'
                checked={props.hour12}
                onChange={props.handleChange}
            />
            <span class='option-label'>24 Hour Time?</span>
        </label> 
        <br />
        <label>
            <select
            value={props.timeZone}
            onChange={props.handleChange}
            name='timeZone'
            >
                <option value='Etc/GMT+4'>US/Eastern (UTC-5)</option>
                <option value='Etc/GMT+5'>US/Central (UTC-6)</option>
                <option value='Etc/GMT+6'>US/Mountain (UTC-7)</option>
                <option value='Etc/GMT+7'>US/Pacific (UTC-8)</option>
                <option value='Etc/GMT+8'>Anchorage(UTC-9)</option>
                <option value='Etc/GMT+10'>Honolulu (UTC-10)</option>
                <option value='Etc/GMT+11'>Midway (UTC-11)</option>
                <option value='Pacific/Chatham'>Chathman Islands (UTC+12.75)</option>
                <option value='Etc/GMT-10'>Sydney (UTC+10)</option>
                <option value='Etc/GMT-9'>Tokyo (UTC+9)</option>
                <option value='Etc/GMT-8'>Beijing (UTC+8)</option>
                <option value='Etc/GMT-7'>Bangkok (UTC+7)</option>
                <option value='Asia/Calcutta'>New Delhi (UTC+5.5)</option>
                <option value='Etc/GMT-5'>Islamabad (UTC+5)</option>
                <option value='Etc/GMT-4'>Abu Dubai (UTC+4)</option>
                <option value='Etc/GMT-3'>Moscow (UTC+3)</option>
                <option value='Etc/GMT-2'>Berlin (UTC+2)</option>
                <option value='Etc/GMT-1'>London (UTC+1)</option>
                <option value='Etc/GMT+0'>Reykjavik (UTC)</option>
                <option value='Etc/GMT+2'>Nuuk (UTC-2)</option>
                <option value='Etc/GMT+3'>Goose Bay (UTC-3)</option>
            </select>
            <span class='option-label'>Change Time Zone</span> 
        </label>
        <br />
        <label>
            <select 
            value={props.clockFont}
            onChange={props.handleChange}
            name='clockFont'
            >
                <option value='Rokkitt, Kameron, serif'>Default</option>
                <option value='Bebas Neue, cursive'>Benas Neue</option>
                <option value='Edu VIC WA NT Beginner, cursive'>Slanted</option>
                <option value='Rubik Moonrocks, cursive'>Moon Rock</option>
                
            </select>
            <span class='option-label'>Change Font</span>
        </label>
        <br />
        <label>
            <input 
                type='color'
                name='clockColor'
                value={props.clockColor}
                onChange={props.handleChange}
            />
            <span class='option-label'>Clock Font Color</span> 
        </label>
        <br />
        <label>
            <input 
                type='color'
                name='backgroundColor'
                value={props.backgroundColor}
                onChange={props.handleChange}
            />
            <span class='option-label'>Background Color</span> 
        </label>
        <br />
        <input 
                type='button'
                value='Reset Colors'
                onClick={props.resetColors}  
        />
    </div>

    );
}