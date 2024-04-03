export interface Mission {
    mission_name: string
    launch_year: number
    details: string
    rocket:{
        rocket_name: string
        rocket_type: string
    }
    links:{
        mission_patch_small: string
    }
    launch_site:{
        site_name_long: string
    }
}