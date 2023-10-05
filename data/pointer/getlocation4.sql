SELECT [no]
      ,[x]
      ,[y]
      ,[diameter]
      ,pointer.resource_id
      ,pointer.dept
	    ,[resource].[location]
	    ,[resource].model
	    ,Department.image_path
      
  FROM [dbo].[pointer]

INNER JOIN Department
  ON pointer.dept = Department.dept

INNER JOIN [resource]
ON pointer.resource_id = [resource].resource_id

WHERE [resource].[location] = 'OFFICE PD 2'