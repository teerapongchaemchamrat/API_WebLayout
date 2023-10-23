SELECT [no]
      ,[x]
      ,[y]
      ,[diameter]
      ,[pointer].[Uf_asset_RESID]
      ,[pointer].[Uf_asset_department]
	    ,[resource_detail].[Uf_asset_Location]
	    ,[resource_detail].[Uf_asset_ModelNumber]
      ,[resource_detail].[Uf_asset_Car_Exp]
      ,[resource_detail].[Uf_asset_Compulsory_Exp]
      ,[resource_detail].[Uf_asset_Contact]
      ,[resource_detail].[Uf_asset_ErectricCurrent]
      ,[resource_detail].[Uf_asset_PmDurationTime]
      ,[resource_detail].[Uf_asset_PmLink]
      ,[resource_detail].[Uf_asset_StartUsedDate]
      ,[resource_detail].[Uf_asset_UserManual]
      ,[resource_detail].[Uf_asset_Voltage]
      ,[resource_detail].[Uf_asset_Weight]
      ,[resource_detail].[Uf_asset_ErectricKw]
      ,[resource_detail].[Uf_asset_ExpireDate]
      ,[resource_detail].[Uf_asset_inventory_number]
      ,[resource_detail].[Uf_asset_SerialNumber]
      ,[Department].[image_path]
      ,[pointer].[stat]

  FROM [dbo].[pointer]

INNER JOIN Department
  ON pointer.Uf_asset_department = Department.dept

INNER JOIN [resource_detail]
ON pointer.Uf_asset_RESID = [resource_detail].Uf_asset_RESID

WHERE [resource_detail].[Uf_asset_Location] = 'OFFICE PD 1'